python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
gunicorn app:app --bind 0.0.0.0:5000 --daemon