// emissionCalculations.js
import { CONVERSION_FACTORS, COMPANY_DATA_FEILD } from '../helpers/constatnts.js';

export const calculateScope1Emissions = (data, emissions) => {
  let totalEmissions = 0;

  if (emissions.vFuelConsumption) {
    totalEmissions += emissions.vFuelConsumption * CONVERSION_FACTORS.vFuelConsumption;
  }
  if (emissions.mFuelConsumption) {
    totalEmissions += emissions.mFuelConsumption * CONVERSION_FACTORS.mFuelConsumption;
  }
  data.forEach(item => {
    if (item.category === COMPANY_DATA_FEILD.materials_Inventory && item.details.item === COMPANY_DATA_FEILD.airConditioning) {
      totalEmissions += item.details.amount * CONVERSION_FACTORS.airConditioning;
    }
  });

  return totalEmissions;
};

export const calculateScope2Emissions = (data, emissions) => {
  let totalEmissions = 0;

  if (emissions.electricityConsumption) {
    totalEmissions += emissions.electricityConsumption * CONVERSION_FACTORS.electricityConsumption;
  }
  if (emissions.elecHeatingConsumption) {
    totalEmissions += emissions.elecHeatingConsumption * CONVERSION_FACTORS.elecHeatingConsumption;
  }
  data.forEach(item => {
    if (item.category === COMPANY_DATA_FEILD.materials_Inventory && item.details.item === COMPANY_DATA_FEILD.plastic_Products) {
      totalEmissions += item.details.amount * CONVERSION_FACTORS.plasticProducts;
    }
    if (item.category === COMPANY_DATA_FEILD.materials_Inventory && item.details.item === COMPANY_DATA_FEILD.paper_Packaging) {
      totalEmissions += item.details.amount * CONVERSION_FACTORS.paperPackaging;
    }
  });

  return totalEmissions;
};

export const calculateScope3Emissions = (data) => {
  let totalEmissions = 0;
  data.forEach(item => {
    if (item.category === COMPANY_DATA_FEILD.business_Travel) {
      totalEmissions += item.details.amount * CONVERSION_FACTORS.businessTravel;
    }
  });
  return totalEmissions;
};

// Helper function to calculate emissions for each expense item
export const calculateEmissions = (type, amount) => {
  switch (type) {
    case COMPANY_DATA_FEILD.vehicle_Fuel_Consumption:
    case COMPANY_DATA_FEILD.machinery_Fuel_Consumption:
      return amount / 2 * 2.1;
    case COMPANY_DATA_FEILD.electricity_Consumption:
    case COMPANY_DATA_FEILD.elec_Heating_Consumption:
      return amount / 0.25 * 0.6142;
    case COMPANY_DATA_FEILD.airConditioning:
      return amount * 0.236 / 3.75;
    case COMPANY_DATA_FEILD.plasticProducts:
      return amount * 0.292 / 3.75;
    case COMPANY_DATA_FEILD.paper_Packaging:
      return amount * 0.737 / 3.75;
    case COMPANY_DATA_FEILD.flights:
    case COMPANY_DATA_FEILD.bus_Tickets:
    case COMPANY_DATA_FEILD.car_Rentals:
      return amount * 0.976 / 3.75;
    default:
      return 0;
  }
};

