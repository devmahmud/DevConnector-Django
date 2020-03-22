import hashlib
from urllib.parse import urlencode

def get_gravatar(email, size="200"):
    """Return Gravatar link from email"""

    gravatar_url = "//www.gravatar.com/avatar/" + \
        hashlib.md5(email.encode('utf-8')).hexdigest() + "?"
    gravatar_url += urlencode({'d': 'retro', 's': str(size)})

    print("Gravatar", gravatar_url)
    return gravatar_url