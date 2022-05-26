-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" DATE NOT NULL,
    "register_number" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" DATE NOT NULL,
    "email" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "gender" VARCHAR(1) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherClass" (
    "id" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "TeacherClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "expires_in" INTEGER NOT NULL DEFAULT 7,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DownloadedLesson" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,

    CONSTRAINT "DownloadedLesson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_register_number_key" ON "Student"("register_number");

-- CreateIndex
CREATE UNIQUE INDEX "Student_class_id_key" ON "Student"("class_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherClass_class_id_key" ON "TeacherClass"("class_id");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherClass_teacher_id_key" ON "TeacherClass"("teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_class_id_key" ON "Lesson"("class_id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_teacher_id_key" ON "Lesson"("teacher_id");

-- CreateIndex
CREATE UNIQUE INDEX "DownloadedLesson_student_id_key" ON "DownloadedLesson"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "DownloadedLesson_lesson_id_key" ON "DownloadedLesson"("lesson_id");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherClass" ADD CONSTRAINT "TeacherClass_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherClass" ADD CONSTRAINT "TeacherClass_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DownloadedLesson" ADD CONSTRAINT "DownloadedLesson_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DownloadedLesson" ADD CONSTRAINT "DownloadedLesson_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
