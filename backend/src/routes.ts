import { Router } from 'express';
import multer from 'multer';

import { CreateStudentController } from './controllers/CreateStudentController';
import ImportStudentsController from './controllers/ImportStudentsController';

const routes = Router();

const upload = multer({
  dest: 'tmp/',
});

const importStudentsController = new ImportStudentsController();
const createStudentController = new CreateStudentController();

routes.post(
  '/students/upload',
  upload.single('file'),
  importStudentsController.handle
);

routes.post('/students/create', createStudentController.handle);

export { routes };
