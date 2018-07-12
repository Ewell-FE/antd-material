import CalendarLocale from 'rc-calendar/lib/locale/en_US'

export default {
    locale: 'en',
    DatePicker: {
        lang: {
            placeholder: 'Select date',
            monthPlaceholder: 'Select month',
            rangePlaceholder: 'Start date ~ End date',
            weekPlaceholder: 'Select week',
            ...CalendarLocale,
        },
        timePickerLocale: {
            dateInputPlaceholder: 'Please input',
            RangeDateInputPlaceholder: ['Start date', 'End date'],
            placeholder: 'Select time',
        },
    },
    TimePicker: {
        placeholder: 'Select time',
    },
    Pagination: {
        pageUnit: 'page',
        jumpText: 'jumpTo'
    },
    Modal: {
        okText: 'Ok',
        cancelText: 'Cancel',
    },
    Popconfirm: {
        okText: 'Ok',
        cancelText: 'Cancel',
    },
    Transfer: {
        notFoundContent: ['Not Found'],
        searchPlaceholder: ['Search here'],
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
    },
};