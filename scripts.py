# This is a temporary workaround till Poetry supports scripts, see
# https://github.com/sdispater/poetry/issues/241.
from subprocess import check_call


def start() -> None:
    check_call(["python", "manage.py", "runserver"])


def migrate() -> None:
    check_call(["python", "manage.py", "migrate"])
