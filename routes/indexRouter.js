const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// router.get('/', indexController.index);

// router.get("/json", indexController.jsonData)

router.get("/allExercises", indexController.getAllExercises)

router.get("/oneQuote", indexController.getOneQuote)

router.get("/exercisesByBodyPart/:bodyPart", indexController.getExercisesByBodyPart)

router.get("/allBodyParts", indexController.getAllBodyParts)

router.get("/exercise/:ID", indexController.getExercisesByID)

router.get("/exercisesByName/:name", indexController.getExercisesByName)

router.get("/targetMuscleList", indexController.getAllTargetMuscles)

router.get("/exercisesByTargetMuscle/:muscle", indexController.getExercisesByTargetMuscle)

router.get("/equipmentList", indexController.getAllEquipment)

router.get("exercisesByEquipment/:equipment", indexController.getExercisesByEquipment)



module.exports = router;
