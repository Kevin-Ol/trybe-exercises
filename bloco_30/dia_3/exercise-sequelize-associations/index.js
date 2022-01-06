const bodyParser = require('body-parser');
const { Patient, Plan, Surgery } = require('./models');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/plans', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plans' },
    });

    return res.status(200).json(patients)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/plans/:id', async (req, res) => {
  try {
    const { id } = req.params
    const plan = await Plan.findByPk(id, {
      include: { model: Patient, as: 'patients' },
    });

    if(!plan) return res.status(404).json({ message: 'Plano não encontrado' })

    return res.status(200).json(plan)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/surgery', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
    });

    return res.status(200).json(patients)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/surgery/anonymous', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { 
        model: Surgery, 
        as: 'surgeries',
        through: { attributes: [] },
        attributes: { exclude: ['doctor'] } 
      },
    });

    return res.status(200).json(patients)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/surgeries/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const surgeries = await Surgery.findAll({
      where: { doctor: name },
      include: { 
        model: Patient, 
        as: 'patients',
        // through: { attributes: [] },
      },
    });

    return res.status(200).json(surgeries)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/patients', async (req, res) => {
  try {
    const { fullname, planId } = req.body
    const patient = await Patient.create({ fullname, planId });

    if(!patient) return res.status(404).json({ message: 'Plano não existe' })

    return res.status(201).json(patient)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});


app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});