const UvIndex = (value) => {
    switch (value) {
        case 0 || 1 || 2:
            return 'Low';
        case 3 || 4 || 5:
            return 'Moderate';
        case 6 || 7:
            return 'High';
        case 8 || 9 || 10:
            return 'Very High';
        case value > 10:
            return 'Extreme';
        default:
            return '';
    }
};

export default UvIndex;
