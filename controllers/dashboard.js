"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Station Dashboard',
      stations: stationStore.getAllStations(),
    };
    
    logger.info('about to render', stationStore.getAllStations());
    response.render('dashboard', viewData);
  },
  
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  },
  
  addStation(request, response) {
    const newStation = {
      id: uuid.v1(),
      name: request.body.name,
      readings: [],
    };
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
  
};

module.exports = dashboard;