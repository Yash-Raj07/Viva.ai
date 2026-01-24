const db = require("../config/db");

exports.getNearbyHospitals = async (userLat, userLng) => {
  const query = `
    SELECT 
      id,
      name,
      latitude,
      longitude,
      (
        6371 * acos(
          cos(radians(?)) * cos(radians(latitude)) *
          cos(radians(longitude) - radians(?)) +
          sin(radians(?)) * sin(radians(latitude))
        )
      ) AS distance
    FROM hospitals
    HAVING distance < 10
    ORDER BY distance
    LIMIT 5;
  `;

  const [rows] = await db.query(query, [
    userLat,
    userLng,
    userLat
  ]);

  return rows.map(hospital => ({
    ...hospital,
    distance: Number(hospital.distance.toFixed(2))
  }));
};

