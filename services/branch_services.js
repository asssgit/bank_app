const { fileNanme, logger } = require('../log4');
const BranchRepo = require('../models/branch_repo');

var fname;

fileNanme(__filename).then((data) => {
  fname = data;
});

exports.getBranches = async (data) => {
  try {
    logger.info(`file: ${fname} getBranches is called`);
    let result = await BranchRepo.getBranchesRepo();
    console.log(result);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.getBranchById = async (data) => {
  try {
    logger.info(`file: ${fname} getBranchById is called`);
    let result = await BranchRepo.getBranchById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.addNewBranch = async (data) => {
  try {
    logger.info(`file: ${fname} addNewBranch is called`);
    let result = await BranchRepo.addNewBranch(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.deleteBranchById = async (data) => {
  try {
    logger.info(`file: ${fname} deleteBranchById is called`);
    let result = await BranchRepo.deleteBranchById(data);
    return result;
  } catch (err) {
    logger.fatal(`file: ${fname},error: ${err}`);
    console.log(err);
  }
};

exports.updateBranch = async (data) => {
  try {
    logger.info(`file: ${fname} updateBranch is called`);
    let result = await BranchRepo.updateBranch(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.branchFilter = async (data) => {
  try {
    logger.info(`file: ${fname} branchFilter is called`);
    let result = await BranchRepo.branchFilter(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};

exports.getBranchNameById = async (data) => {
  try {
    logger.info(`file: ${fname} getBranchNameById is called`);
    let result = await BranchRepo.getBranchNameById(data);
    return result;
  } catch (err) {
    console.log(err);
    logger.fatal(`file: ${fname},error: ${err}`);
  }
};