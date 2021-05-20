const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addEntry = (object, key, value) => (object[key] = value)
  
  addEntry(lesson2, 'turno', 'noite')

  console.log('lesson2', lesson2)

  const showKeys = (object) => Object.keys(object);

  console.log('keys', showKeys(lesson2));

  const objectLength = (object) => Object.keys(object).length;

  console.log('tamanho', objectLength(lesson2));

  const showValues = (object) => Object.values(object);

  console.log('values', showValues(lesson2));

  const teste = 'oi'

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  console.log(allLessons)

  const totalStudents = (object) => {
      let total = 0;
      for (key in object) {
          total += object[key]['numeroEstudantes']
      }
      return total
  }

  console.log(totalStudents(allLessons))

  const getValueByNumber = (object, number) => {
      const keys = Object.keys(object);
      return (object[keys[number]]);
  }

  console.log(getValueByNumber(lesson1, 0))

  const verifyPair = (object, key, value) => {
      let keys = Object.keys(object);
      if (keys.includes(key) && object[key] === value) {
              return true
          } else {
              return false
      }
  }

  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

  const mathStudents = (object) => {
    let total = 0;
    for (key in object) {
        if (object[key]['materia'] === 'Matemática')
        total += object[key]['numeroEstudantes']
    }
    return total
}
console.log(mathStudents(allLessons))


// console.log(allLessons['lesson1']['professor'])
const createReport = (object, teacher) => {
    let lessons = Object.keys(object);
    let subject = []
    let total = 0
    for (let lesson = 0; lesson < lessons.length; lesson += 1) {
        if (object[lessons[lesson]]['professor'] === teacher) {
            subject.push(object[lessons[lesson]]['materia']);
            total += object[lessons[lesson]]['numeroEstudantes']
        }
    }
    const report = {}
    report['professor'] = teacher;
    report['aulas'] = subject;
    report['estudantes'] = total;
    return report
}

console.log(createReport(allLessons, 'Maria Clara'))