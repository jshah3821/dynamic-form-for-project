import axios from "axios";
import { toast } from "react-toastify";

export const callApi = async (url: string, data: any, setFormData: any, initialFormData) => {
    try {
        const response = await axios.post(`${url}`, data);
        if (response?.data) {
            toast.success("Data sent Successfully");
            setFormData(initialFormData);
        }
    }
    catch (error) {
        console.log(error);
        toast.error(error || "Data send failed");
    }
} 