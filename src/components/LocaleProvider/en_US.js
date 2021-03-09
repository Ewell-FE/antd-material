import CalendarLocale from 'rc-calendar/lib/locale/en_US'
import Pagination from 'rc-pagination/lib/locale/en_US';

export default {
    locale: 'en',
    Pagination,
    DatePicker: {
        lang: {
            placeholder: 'Select Date',
            monthPlaceholder: 'Select Month',
            rangePlaceholder: '      From       ~        To',
            weekPlaceholder: 'Select Week',
            ...CalendarLocale,
            ok:'Confirm',
            timeSelect:'Select Time',
            dateSelect:'Select Date',
        },
        timePickerLocale: {
            dateInputPlaceholder: 'Please Input',
            RangeDateInputPlaceholder: ['Start Date', 'End Date'],
            placeholder: 'Select Time',
        },
    },
    TimePicker: {
        placeholder: 'Select Time',
    },
    Modal: {
        okText: 'Confirm',
        cancelText: 'Cancel',
    },
    Popconfirm: {
        okText: 'Confirm',
        cancelText: 'Cancel',
    },
    Transfer: {
        notFoundContent: ['Not Found'],
        searchPlaceholder: ['Search Here'],
    },
    Select: {
        notFoundContent: 'Not Found',
        enterAlertContent: 'Enter Characters'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove File',
        uploadError: 'Upload Error',
        previewFile: 'Preview File',
    },
    Table: {
        noData: 'No Data'
    }
};