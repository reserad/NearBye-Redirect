import { Button } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import styles from './VerifyRedirect.module.css'

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;
    
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    
    // iOS detection from: http://stackoverflow.com/a/...
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "iOS";
    }
    
    return "unknown";
}

function DetectAndServe(id: string){
    let os = getMobileOperatingSystem();
    if (os == "Android") {
        return `exp://192.168.86.247:19000/--/verify/${id}`;
    }
}

export const VerifyRedirect = () => {
    const {id} = useParams();
    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>NearBye</h2>
            <Button variant='contained' href={DetectAndServe(id!)}>Complete Login</Button>
        </div>
    )
}