# FitPulse API

FitPulse is a system developed with **Laravel** for managing gym students.

---

# 📌 Technologies Used

* PHP 8+
* Laravel 12
* MySQL
* Laravel Breeze (authentication)
* Blade
* Git & GitHub

---

# 📂 Project Structure

```
fitpulse-api
│
├── docs/          # Project documentation and PDFs
│
└── src/           # Laravel application source code
    ├── app/
    ├── routes/
    ├── resources/
    ├── database/
    └── ...
```

---

# ⚙️ Requirements

Before running the project, make sure you have installed:

* PHP 8+
* Composer
* MySQL
* Git
* Node.js (optional, for assets)

Recommended environments:

* XAMPP
* Laragon

---

# 🚀 How to Run the Project

## 1️⃣ Clone the repository

```bash
git clone https://github.com/gustavomrq/fitpulse-api.git
```

Enter the project folder:

```bash
cd fitpulse-api/src
```

---

# 2️⃣ Install Laravel dependencies

```bash
composer install
```

---

# 3️⃣ Create the `.env` file

Copy the example environment file:

```bash
cp .env.example .env
```

---

# 4️⃣ Configure the database

Open the `.env` file and configure the database connection:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fitpulse
DB_USERNAME=root
DB_PASSWORD=
```

---

# 5️⃣ Generate the application key

```bash
php artisan key:generate
```

---

# 6️⃣ Run database migrations (if necessary)

```bash
php artisan migrate
```

---

# 7️⃣ Install Breeze authentication (if not installed)

```bash
php artisan breeze:install
```

Then run:

```bash
npm install
npm run build
```

---

# 8️⃣ Start the development server

```bash
php artisan serve
```

The application will be available at:

```
http://127.0.0.1:8000
```

---

# 🔐 Authentication

The system uses **Laravel Breeze** for authentication.

Features include:

* User registration
* Login
* Logout
* Route protection

---
# 🌐 Main Routes

```
/login
/register
/dashboard
