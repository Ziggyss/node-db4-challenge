const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shopping", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(list => {
      res.json(list)
      // if (list) {
      //   res.json(list);
      // } else {
      //   res
      //     .status(404)
      //     .json({ message: "Could not find recipe with given id." });
      // }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get steps" });
    });
});

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Schemes.add(schemeData)
//   .then(scheme => {
//     res.status(201).json(scheme);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new scheme' + err.message });
//   });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params;

//   Schemes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes.addStep(stepData, id)
//       .then(step => {
//         res.status(201).json(step);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Schemes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes.update(changes, id)
//       .then(updatedScheme => {
//         res.json(updatedScheme);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update scheme' });
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete scheme' });
//   });
// });

module.exports = router;
