🏋️ FitPulse – Gym Management System

Complete Academic Gym Management Platform
Database Modeling • Back-end Development • System Architecture

📖 Project Overview

FitPulse is a complete Gym Management System developed to manage members, instructors, memberships, payments, workouts, physical evaluations, store sales, and access control.

The system centralizes administrative, financial, and operational processes of a fitness center into a single integrated platform.

🎯 Project Objective

The main goal of this project is to:

Manage gym members and staff roles

Control memberships and monthly billing

Monitor student attendance (turnstile access system)

Manage personalized workout plans

Register physical evaluations

Control internal store sales

Maintain audit logs for system security

👥 Team Members

Diego Santos – Manager;
Luis Gustavo – Back-end Developer (Database Modeling, API Development, Business Logic);
Livia Karoliny – Front-end Developer;
Guilherme Yuri – Assistant & Tester;
Gilles Gael – Testing & Validation

🛠 Technologies & Tools Used
💻 Back-end

Laravel (PHP Framework)

MySQL (Relational Database)

Eloquent ORM

🗄 Database Modeling

DBDiagram.io

Draw.io / Diagrams.net

🎨 Front-end & Prototyping

Figma

🔄 Version Control

Git

GitHub

📋 Team Management & Communication

Trello

🗂 Project Structure

/docs → Project documentation (DER, Data Dictionary, Business Rules)
/src → Laravel application source code
README.md → Project description

⚙️ How to Run the Project

1️⃣ Clone the repository

git clone https://github.com/gustavomrq/fitpulse-api.git

2️⃣ Navigate into the project folder

cd fitpulse

3️⃣ Install dependencies

composer install

4️⃣ Configure environment file

Copy .env.example to .env and configure your database credentials inside the file:

DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

5️⃣ Generate application key

php artisan key:generate

6️⃣ Run database migrations

php artisan migrate

7️⃣ Start the local server

php artisan serve

Access the system at:
http://127.0.0.1:8000

🔐 System Modules

User Management (Managers, Receptionists, Instructors, Students)

Membership & Monthly Billing

Workout Management

Physical Evaluations

Turnstile Access Control

Internal Store Sales

Audit Logs & Security Monitoring
