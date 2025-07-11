---
sidebar_position: 2
---

# Getting started with the CLI

The AusTrakka CLI is a command-line interface for interacting with the AusTrakka platform.
To use it, you will need an AusTrakka account which grants the relevant roles and permissions in any organisation or 
project you wish to interact with.

The CLI can be used for several purposes, including:

- Submitting sequence data
- Submitting metadata (sample, sequence and epidemiological metadata)
- Retrieving data for analysis
- Uploading analysis results (trees and analysis-derived metadata)

Note that currently, sequence data can only be submitted using the CLI, and cannot be submitted via the web interface.

## Installation

The AusTrakka CLI can be found at https://github.com/AusTrakka/austrakka2-cli .

The CLI requires Python to run. If you would like to use conda to install Python, install the CLI, and save the necessary environment variables,
you can first install either Miniforge (https://github.com/conda-forge/miniforge) or Miniconda (https://docs.conda.io/en/latest/miniconda.html). We recommend Miniforge for most users.

Note that as a part of installing the CLI, you will need to set the `AT_URI` environment variable. This should be set to `https://api.austrakka.net`, as described below.

### Install into a conda environment (optional but recommended)

If you wish to create a conda environment named `austrakka` with the necessary environment 
variables set and the `at-login` alias, run:
```
conda create -n austrakka python=3.12
conda activate austrakka
python -m pip install austrakka
conda env config vars set AT_URI="https://api.austrakka.net"
mkdir -p ${CONDA_PREFIX}/etc/conda/activate.d
echo "alias at-login=\"export AT_TOKEN=\\\$(austrakka auth user)\"" > ${CONDA_PREFIX}/etc/conda/activate.d/austrakka-alias.sh
```
Note that the last two lines are valid only for Linux/Mac and will not work on Windows. These lines create an alias `at-login` 
in the conda environment, which will log you in to the CLI.

You can then use
```
conda activate austrakka
at-login
```
in order to use the CLI. See _User Authentication_ below for alternative login methods.

### Install without conda

If you are using Windows, and are not a WSL or Powershell user, it is strongly recommended to use conda (see above).

To install without conda, simply install with 
```
python -m pip install austrakka
```

You will need to set the environment variable `AT_URI` to `https://api.austrakka.net`. 
You can do this by running:

> #### Mac / Linux
>```
>export AT_URI="https://api.austrakka.net"
>```
>You may wish to add this to your `.bashrc` or `.zshrc` file.

>#### Windows: Powershell
>```
>$Env:AT_URI = "https://api.austrakka.net"
>```

To use the CLI, you must log in by setting the `AT_TOKEN` environment variable using the 
`austrakka auth user` command (see User Authentication, below). 

> #### Mac / Linux
>You may wish to configure 
>a login command for convenience:
>```
>alias at-login="export AT_TOKEN=\$(austrakka auth user)"
>```
>You may wish to add this to your `.bashrc` or `.zshrc` file.

> #### Windows: Powershell
>You may wish to configure 
>a login command for convenience:
>```
>Function at-login { $Env:AT_TOKEN = austrakka auth user }
>```
>You may wish to add this to your `config.ps1` file.

### Updating the CLI

To update to the latest version, run 
```
python -m pip install --upgrade austrakka
```
If you have installed the CLI into a conda environment, you should first activate it with `conda activate austrakka`:
```
conda activate austrakka
python -m pip install --upgrade austrakka
```

## Logging in

Before you can use the CLI, you must log in as described below, to allow the CLI to use your AusTrakka credentials. 
Your authorisation will expire after a period and you will need to log in again.

### User Authentication

Most users will want to log in to the CLI this way.

For any of these methods, you should be directed to log in via a browser and enter a code to authorise the CLI. 
This browser-based login uses your institutional credentials, i.e. the same credentials you use to log in 
to the AusTrakka web interface, and will authenticate you via your institution's identity provider.

>#### Mac / Linux
>If you have configured a login command as described above, you can simply run
>```
>at-login
>``` 
>
>Otherwise, you will need to set the `AT_TOKEN` environment variable. In a Mac or Linux environment you can run:
>```
>export AT_TOKEN=$(austrakka auth user)
>```

>#### Windows: Powershell
>
>```
>$Env:AT_TOKEN = austrakka auth user
>```

>#### Windows: Cmd
>
>Set the `AT_TOKEN` environment variable by first running
>```
>austrakka auth user
>```
>to obtain a token string, and then running 
>```
>set AT_TOKEN=<output of previous command>
>```
>:w
> to set the environment variable.

### Process Authentication

This authentication mode is intended for long-term automated processes. Most users will not need it. 

To authenticate a process, you'll need to set the following environment variables:
```bash
AT_AUTH_PROCESS_ID
AT_AUTH_PROCESS_SECRET
```
Values for `AT_AUTH_PROCESS_ID` and `AT_AUTH_PROCESS_SECRET` will be provided to you by the AusTrakka team. Note that the secret value is sensitive.

Once these variables are set, run the following to authorise:

>#### Mac/Linux
>```
>export AT_TOKEN=$(austrakka auth process)
>```

>#### Windows: Powershell
>```
>$Env:AT_TOKEN = austrakka auth process
>```

>#### Windows: Cmd
>Set the `AT_TOKEN` environment variable by first running
>```
>austrakka auth process
>```
>to obtain a token string, and then running 
>```
>set AT_TOKEN=<output of previous command>
>```
>to set the environment variable.


## Using the CLI

The CLI has a subcommand structure. Run 
```
austrakka -h
```
to see available subcommands.

Run e.g. 
```
austrakka metadata -h
```
to see available commands to manipulate metadata.

Run e.g. 
```
austrakka metadata add -h
```
to see the usage of the `metadata add` command to upload metadata files.
