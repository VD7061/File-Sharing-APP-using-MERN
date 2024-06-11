

import express from 'express';
import {  downloadImage, uploadImage } from '../Controllers/image_controlller.js';
import upload from '../utils/upload.js';


const router = express.Router();


router.post('/upload',upload.single('file'), uploadImage);
router.get('/file/:fileid', downloadImage )



export default router