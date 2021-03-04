import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router
  .post("/users", userController.create)
  .post("/surveys", surveysController.create)
  .get("/surveys", surveysController.show)
  .post("/sendMail", sendMailController.execute)
  .get("/answers/:value", answerController.execute)
  .get("/nps/:survey_id", npsController.execute);

export { router };