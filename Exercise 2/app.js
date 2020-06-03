new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('Click!');
        },
        storeValue: function(event) {
            this.value = event.target.value
            //console.log(event.target.value);
        }
    }
});