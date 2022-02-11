def fizz_buzz(n):
    result = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            result.append("FizzBuzz")
        elif number % 3 == 0:
            result.append("Fizz")
        elif number % 5 == 0:
            result.append("Buzz")
        else:
            result.append(number)
    return result


def translate_to_number(string):
    if not 1 < len(string) <= 30:
        raise ValueError("Expression must have between 1 and 30 characters")
    number = ""
    for letter in string:
        if letter in "ABC":
            number += "2"
        elif letter in "DEF":
            number += "3"
        elif letter in "GHI":
            number += "4"
        elif letter in "JKL":
            number += "5"
        elif letter in "MNO":
            number += "6"
        elif letter in "PQRS":
            number += "7"
        elif letter in "TUV":
            number += "8"
        elif letter in "WXYZ":
            number += "9"
        elif letter in "-01":
            number += letter
        else:
            raise ValueError("Invalid letter")
    return number


def check_email(email):
    split_username = email.split("@")
    username = split_username[0]
    split_domain = split_username[1].split(".")
    domain = split_domain[0]
    extension = split_domain[1]
    if not username[0].isalpha():
        raise ValueError("Username must start with a letter")
    for letter in username:
        if (
            not letter.isalpha() and
            not letter.isdigit() and
            letter not in ("_", "-")
        ):
            raise ValueError(
                "Username must contain only letters, digits, _ and -"
            )
    for letter in domain:
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Domain must contain only letters or digits")
    if len(extension) > 3:
        raise ValueError("Extension must have a maximum of 3 letter")


def valid_email(email):
    split_username = email.split("@")
    username = split_username[0]
    split_domain = split_username[1].split(".")
    domain = split_domain[0]
    extension = split_domain[1]
    if not username[0].isalpha():
        return
    for letter in username:
        if (
            not letter.isalpha() and
            not letter.isdigit() and
            letter not in ("_", "-")
        ):
            return
    for letter in domain:
        if not letter.isalpha() and not letter.isdigit():
            return
    if len(extension) > 3:
        return
    return email


def validate_emails(emails):
    valid_emails = []
    for email in emails:
        email_is_valid = valid_email(email)
        if email_is_valid is not None:
            valid_emails.append(valid_email(email))
    return valid_emails
