const UvIndex = (value) => {
    switch (value) {
        case 0:
            return 'Low';
        case 1:
            return 'Low';
        case 2:
            return 'Low';
        case 3:
            return 'Moderate';
        case 4:
            return 'Moderate';
        case 5:
            return 'Moderate';
        case 6:
            return 'High';
        case 7:
            return 'High';
        case 8:
            return 'Very High';
        case 9:
            return 'Very High';
        case 10:
            return 'Very High';
        case value > 10:
            return 'Extreme';
        default:
            return '';
    }
};

export default UvIndex;
