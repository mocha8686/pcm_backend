FROM python:3.13-rc-slim

WORKDIR /app

# Installs system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        build-essential \
    && rm -rf /var/lib/apt/lists/*

# Installs Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Adds Poetry to PATH
ENV PATH="/root/.local/bin:$PATH"

#
COPY pyproject.toml poetry.lock* ./

# Configurers Poetry
# Disables virtualenv (Cause we in container already)
RUN poetry config virtualenvs.create false

# Installing dependencies
RUN poetry install --no-interaction --no-ansi

# Copying the rest of the application
COPY . .

# Port that application runs on
EXPOSE 8000

# Running migrations and starting the server 
CMD ["sh", "-c", "poetry run python manage.py migrate && poetry run python manage.py runserver 0.0.0.0:8000"]

# To run use : docker run -p 8000:8000 pcm-backend
# To build use : docker build -t pcm-backend .
# To run in detached mode use : docker run -d -p 8000:8000 pcm-backend