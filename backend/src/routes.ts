import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/classes', async (req, res) => {
    const classes = await prisma.class.findMany();

    res.send({ classes })
})

router.post('/classes', async (req, res) => {
    const { name } = req.body;
    
    const new_class = await prisma.class.create({data: { name }});

    res.send({ new_class })
})

router.delete('/classes/:id', async (req, res) => {
    const { id } = req.params;
    
    const class_to_delete = await prisma.class.findUnique({ where: { id }})

    if (!class_to_delete) res.status(401).send("Class not found");
    
    await prisma.class.delete({ where: { id }});

    res.send("Class has been deleted");
})

router.get('/students/:id', async (req, res) => {
    const { id } = req.params;

    const student = await prisma.student.findUnique({ where: { id }})

    res.send({ student })
})

router.post('/students', async (req, res) => {
    const { name, register_number, password, gender, class_id } = req.body;

    const student = await prisma.student.create({ data: { name, register_number, password, gender, class_id }})

    res.send({ student })
})

router.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    
    const student_to_delete = await prisma.student.findUnique({ where: { id }})

    if (!student_to_delete) res.status(401).send("Student not found");
    
    await prisma.student.delete({ where: { id }});

    res.send("Student has been deleted");
})

router.get('/teachers/:id', async (req, res) => {
    const { id } = req.params;

    const teacher = await prisma.teacher.findUnique({ where: { id }})

    res.send({ teacher })
})

router.post('/teacher', async (req, res) => {
    const { name, email, password, gender } = req.body;

    const teacher = await prisma.teacher.create({ data: { name, email, password, gender }})

    res.send({ teacher })
})

router.delete('/teachers/:id', async (req, res) => {
    const { id } = req.params;
    
    const teacher_to_delete = await prisma.teacher.findUnique({ where: { id }})

    if (!teacher_to_delete) res.status(401).send("teacher not found");
    
    await prisma.teacher.delete({ where: { id }});

    res.send("teacher has been deleted");
})

router.get('/teacherclasses/:id', async (req, res) => {
    const { id } = req.params;

    const teacher_classes = await prisma.teacherClass.findMany({ where: { teacher_id: id }})

    res.send({ teacher_classes })
})

router.post('/teacherclasses', async (req, res) => {
    const { teacher_id, class_id } = req.body;

    const teacher_class = await prisma.teacherClass.create({ data: { teacher_id, class_id }})

    res.send({ teacher_class })
})

router.get("/lessons/:id", async (req, res) => {
    const { id } = req.body;

    const lessons = await prisma.lesson.findMany({ where: { id }});

    res.send({ lessons })
})

router.get("/lessons/:class_id", async (req, res) => {
    const { class_id } = req.body;

    const lessons = await prisma.lesson.findMany({ where: { class_id }});

    res.send({ lessons })
})

router.post("/lessons", async (req, res) => {
    const { name, description, video, teacher_id, class_id, subject } = req.body;
 
    const lesson = await prisma.lesson.create({ data: { name, description, video, teacher_id, class_id, subject }});

    res.send({ lesson })
})

router.post("/downloaded_lesson", async (req, res) => {
    const { student_id, lesson_id } = req.body;

    const downloaded_lesson = await prisma.downloadedLesson.create({ data: { student_id, lesson_id } });

    res.send({ downloaded_lesson })
})

router.get("/downloaded_lesson/:student_id", async (req, res) => {
    const { student_id } = req.params;

    const downloaded_lesson = await prisma.downloadedLesson.findMany({ where: { student_id } });

    res.send({ downloaded_lesson })
})

module.exports = router;