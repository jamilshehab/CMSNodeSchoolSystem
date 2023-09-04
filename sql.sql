
-- Create A Table Called Person 

CREATE TABLE person (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15),
    role ENUM('admin', 'teacher', 'student', 'parent') NOT NULL
);

CREATE TABLE admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
    /* Additional admin-specific fields */
);

CREATE TABLE teacher (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
    /* Additional teacher-specific fields */
);

CREATE TABLE student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
    /* Additional student-specific fields */
);

CREATE TABLE parent (
    parent_id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
    /* Additional parent-specific fields */
);

CREATE TABLE grade (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    teacher_id INT NOT NULL,
    grade_value DECIMAL(5, 2),
    /* Additional grade-related fields */
    FOREIGN KEY (student_id) REFERENCES student (student_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher (teacher_id)
);