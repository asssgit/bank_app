var express = require('express');
var router = express.Router();
const fs = require('fs');


const routesInfo = JSON.parse(
  fs.readFileSync('routes.json').toString()
);

const {
  getBranches,
  getBranchById,
  addNewBranch,
  deleteBranchById,
  updateBranch,
  branchFilter,
  getBranchNameById,
} = require('../controllers/branch_controller');

router.get(routesInfo.GetBranches, getBranches);

router.post(routesInfo.GetBranchById, getBranchById);

router.post(routesInfo.AddNewBranch, addNewBranch);

router.delete(routesInfo.DeleteBranchById, deleteBranchById);

/* Patch method can also be used here */
router.put(routesInfo.UpdateBranch, updateBranch);

router.post(routesInfo.BranchFilter, branchFilter);

router.post(routesInfo.GetBranchNameById, getBranchNameById);

module.exports = router;