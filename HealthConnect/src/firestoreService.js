import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from './firebaseConfig';

const db = getFirestore(app);
const patientsCollection = collection(db, "patients");

// Function to add patient data
export const addPatient = async (patientData) => {
  try {
    const docRef = await addDoc(patientsCollection, patientData);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

// Function to get all patients
export const getPatients = async () => {
  try {
    const snapshot = await getDocs(patientsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};
