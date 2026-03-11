# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

Making third-party API requests directly from the frontend is **unsafe** because `API keys` become publicly visible. A malicious user can extract the key and abuse the API, leading to **rate limits**, **service abuse**, or **financial costs**. The correct solution is to hide the API key on a backend server and proxy the request through your API.

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

The **proxy server strategy** protects `API keys` by keeping them on the backend. The frontend sends requests to your server, and the server securely communicates with the third-party `API` using the secret key. This prevents sensitive credentials from being exposed in client-side code.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

An **environment variable** is a value stored outside of the application’s source code that the program can access while it runs. These variables are typically used to store configuration information such as `API keys`, database credentials, ports, or secret tokens.

**Why we store API keys in a `.env` file instead of source code**

`API keys` are sensitive credentials. If they are written directly in the source code and the code is shared publicly, anyone could see and use the **key**. Storing them in a `.env` file allows developers to keep secrets separate from the codebase while still making them accessible to the application through **environment variables**.

**The role of `.gitignore`**

The `.gitignore` file tells Git which files should not be tracked or committed to the repository. Developers usually add the `.env` file to `.gitignore`.

This ensures that the file containing the API keys and other secrets is never uploaded to **GitHub** or **shared publicly**.

**What could go wrong if .env is committed to GitHub**

If a `.env` file is accidentally committed to a public repository, several problems can occur:

1. `API keys` become exposed to anyone who can view the repository.

2. **Malicious** users could use the key to make requests to the API, potentially **exhausting your rate limits**.

3. Some `APIs` charge based on usage, which could lead to **unexpected costs**.

4. The service provider might revoke or block the key due to suspicious activity.

Because of these risks, we as developers store sensitive values in environment variables and use `.gitignore` to ensure those secrets are never committed to version control.
