import { z } from "zod";

/* -----------------------------
   Hospital Schema
------------------------------ */
export const hospitalSchema = z.object({
  name: z.string().min(1, "Hospital name is required"),
  latitude: z.number(),
  longitude: z.number(),
  working_hours: z.string().min(1),
});

/* -----------------------------
   Doctor Schema
------------------------------ */
export const doctorFormSchema = z.object({
  hospital_id: z.number().int(),
  name: z.string().min(1, "Doctor name is required"),
  specialization: z.string().min(1, "Specialization is required"),
});

/* -----------------------------
   Appointment Slot Schema
------------------------------ */
export const appointmentSlotSchema = z.object({
  doctor_id: z.number().int(),
  slot_time: z.string().datetime(),
  is_booked: z.boolean().optional(),
});

/* -----------------------------
   Patient Schema
------------------------------ */
export const patientSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(8).max(15),
});

/* -----------------------------
   Appointment Schema
------------------------------ */
export const appointmentSchema = z.object({
  patient_id: z.number().int(),
  doctor_id: z.number().int(),
  hospital_id: z.number().int(),
  appointment_time: z.string().datetime(),
  status: z.enum(["pending", "confirmed", "cancelled"]),
});

/* -----------------------------
   Call Session Schema
------------------------------ */
export const callSessionSchema = z.object({
  session_id: z.string().min(1),
  user_lat: z.number(),
  user_lng: z.number(),
});
