import axios from "axios"

const fetchData = async () => {

    const responseForMedicines = await axios.get("/api/products")
    console.log(responseForMedicines)
    const responseForDoctors = await axios.get("/api/doctor")
    const responseForPathologist = await axios.get("/api/pathologist")
    const responseForTests = await axios.get("/api/pathologist/tests")
    let medicines = responseForMedicines.data.sort((a, b) => b.stock - a.stock).splice(0, 4)
    let doctors = responseForDoctors.data
    let pathologist = responseForPathologist.data
    let tests = responseForTests.data

    console.log(pathologist)
    return {
        medicines: medicines,
        doctors: doctors,
        pathologist: pathologist,
        tests : tests

    }
}

const medicalService = { fetchData }

export default medicalService