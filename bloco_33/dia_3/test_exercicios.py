import pytest
from exercicios import (
    fizz_buzz, translate_to_number, check_email, validate_emails
)


def test_fizz_buzz_return_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_return_fizz():
    assert fizz_buzz(3)[-1] == 'Fizz'


def test_fizz_buzz_return_buzz():
    assert fizz_buzz(5)[-1] == 'Buzz'


def test_fizz_buzz_return_fizzbuzz():
    assert fizz_buzz(15)[-1] == 'FizzBuzz'


def test_translate_to_number_return_word():
    assert translate_to_number('1-HOME-SWEET-HOME') == '1-4663-79338-4663'


def test_translate_to_number_return_word2():
    assert translate_to_number('MY-MISERABLE-JOB') == '69-647372253-562'


def test_translate_to_number_return_error_for_31_letters():
    long_string = "AAAAABBBBBCCCCCDDDDDEEEEEFFFFFGGGGG"
    expected_error = "Expression must have between 1 and 30 characters"
    with pytest.raises(ValueError, match=expected_error):
        assert translate_to_number(long_string)


def test_translate_to_number_return_error_for_invalid_letters():
    wrong_string = "my-miserable-***"
    expected_error = "Invalid letter"
    with pytest.raises(ValueError, match=expected_error):
        assert translate_to_number(wrong_string)


def test_check_email_correct_email():
    assert check_email("kevinzero@hotmail.com") is None


def test_check_email_wrong_username():
    expected_error = "Username must contain only letters, digits, _ and -"
    with pytest.raises(ValueError, match=expected_error):
        assert check_email("kevin.zero@hotmail.com")


def test_check_email_wrong_domain():
    expected_error = "Domain must contain only letters or digits"
    with pytest.raises(ValueError, match=expected_error):
        assert check_email("kevinzero@hot_mail.com")


def test_check_email_wrong_extension():
    expected_error = "Extension must have a maximum of 3 letter"
    with pytest.raises(ValueError, match=expected_error):
        assert check_email("kevinzero@hotmail.comm")


def test_validate_emails_correct_emails():
    emails_list = ["nome@dominio.com", "outro@dominio.com"]
    assert validate_emails(emails_list) == emails_list


def test_validate_emails_one_wrong_email():
    emails_list = [
        "nome@dominio.com",
        "errad#@dominio.com",
        "outro@dominio.com"
        ]
    expected_result = ["nome@dominio.com", "outro@dominio.com"]
    assert validate_emails(emails_list) == expected_result


def test_validate_emails_two_wrong_emails():
    emails_list = [
        "nome@do*minio.com",
        "errad#@dominio.com",
        "outro@dominio.com"
        ]
    expected_result = ["outro@dominio.com"]
    assert validate_emails(emails_list) == expected_result


def test_validate_emails_all_wrong_emails():
    emails_list = [
        "nome@do*minio.com",
        "errad#@dominio.com",
        "outro@dominio.comm"
        ]
    expected_result = []
    assert validate_emails(emails_list) == expected_result
