import { Router } from 'express';

// Import individual module routes
import { AuthRoutes } from '../modules/auth/auth.route';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { PatientRoutes } from '../modules/patient/patient.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import adminRoutes from '../modules/admin/admin.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { TimeSlotRoutes } from '../modules/doctorTimeSlot/timeSlot.route';
import { FavouriteRoutes } from '../modules/favourites/favourites.route';
import { MedicineRoutes } from '../modules/medicines/medicines.route';
import { PrescriptionRoutes } from '../modules/prescription/prescription.route';
import { ReviewRoutes } from '../modules/reviews/reviews.route';

const router = Router();

// Define all module-level routes
router.use('/auth', AuthRoutes);
router.use('/doctors', DoctorRoutes);
router.use('/patients', PatientRoutes);
router.use('/appointments', AppointmentRoutes);
router.use('/admin', adminRoutes);
router.use('/blogs', BlogRoutes);
router.use('/timeslots', TimeSlotRoutes);
router.use('/favourites', FavouriteRoutes);
router.use('/medicines', MedicineRoutes);
router.use('/prescriptions', PrescriptionRoutes);
router.use('/reviews', ReviewRoutes);

export default router;
