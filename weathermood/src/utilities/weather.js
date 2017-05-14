export function getMoodIcon(group) {
    switch (group) {
        case 'Thunder':
            return 'fa fa-bolt';
        case 'Drizzle':
            return 'fa fa-tint';
        case 'Rain':
            return 'fa fa-umbrella';
        case 'Snow':
            return 'fa fa-snowflake-o';
        case 'Windy':
            return 'owf owf-905';
        case 'Clear':
            return 'fa fa-sun-o';
        case 'Clouds':
            return 'fa fa-cloud';
        case 'YES':
            return 'fa fa-check';
        case 'NO':
            return 'fa fa-times';

        default:
            return 'fa fa-question-circle';
    }
}
