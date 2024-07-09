# Local setup

- Install [Docker](https://docs.docker.com/desktop/) and [docker-compose](https://docs.docker.com/compose/install/) on your machine
- You should have the `docker` and `docker-compose` commands available in your terminal.
- Install [VSCode](https://code.visualstudio.com/download)
- Install the following plugins for VSCode:
    - `ms-vscode-remote.remote-containers`
    - `ms-vscode-remote.vscode-remote-extensionpack`
- Create a `Projects` folder in your home directory: `mkdir ~/Projects`
- Clone this repository: `git clone https://github.com/theartling/assignment-full-stack.git`
- Change directory: `cd ~/Projects/assignment-full-stack`
- Install the containers: `docker-compose up`
- Open VSCode: `code .`
- Use the `Command Palette` and run the `Dev Containers: Attach to Running Container` command
    - select the `dummy_django_backend` container
- In the new VSCode window that is connected to `dummy_django_backend` container:
    - Open folder `/usr/src/app/`
    - You may want to install the Python plugin into this container (`ms-python.python`)
    - Make sure that the Python interpreter at `/usr/local/bin/python` is selected (version `3.12.4`) by clicking the bottom right corner in VSCode.
    - Open the terminal and run `make run`
        - This will run `./manage.py runserver 0.0.0.0:8000`  
        - You should now be able to browse to `http://localhost:8000/admin/` and login with username `admin` and password `test123`
        - You should also be able to browse to `http://localhost:8000/team/` and see some JSON output
- Use the `Command Palette` and run the `Dev Containers: Attach to Running Container` command again
    - Select the `dummy_remix_frontend` container
- In the new VSCode window that is connected to `dummy_remix_frontend` container:
    - Open folder `/usr/src/app/`
    - You may want to install the Tailwind plugin into this container (`bradlc.vscode-tailwindcss`)
    - Open the terminal and run `npm install` and then `npm run dev`
    - You should now be able to browse to `http://localhost:5173` and see the root view
    - Click at the `/team/` link and see the team view.

**To sum it up:** In order to work on the project, you start two Docker containers,
one for the Django backend and one for the Remix frontend. You then use VSCode to
connect to both of these containers. In each VSCode instance, you use the terminal
to start the backend and frontend servers.

# You task:

