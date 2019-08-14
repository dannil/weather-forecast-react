interface IWeather {
    latitude: number;
    longitude: number;
    timezone: string;
    currently: {
        time: number;
        summary: string;
        icon: string;
        temperature: number;
    };
    daily: {
        summary: string;
        icon: string;
        data: [
            {
                time: number;
                summary: string;
                icon: string;
                temperature: number;
                sunriseTime: number;
                sunsetTime: number;
            }
        ]
    };
}

export default IWeather;
