new Vue({
    el: '#vueApp',
    data: {
        name: '',
        email: '',
        feed_text: '',
        feedbacks: [{ name:'John Smith', email:'jsmith@yahoo.com', message:'Wow.. this webpage is awsome. Thanks for sharing your hobbies and collectibles with us.'}]
        // in here I used some data as previously entered feedback to display in web page
    },
    methods: {
        submitFeedback : function()
        {
            const feedback = {
                name: this.name,
                email: this.email,
                message: this.feed_text
            }

            /* if there is any field is empty when the user is clicking on the submit button,
               an alert message will pop up.  */
            if(this.name == '' || this.email == '' || this.feed_text == ''){
                alert('You missed something! Please enter all fields before submit');
            }
            else{
                this.feedbacks.push(feedback);
                this.name = '';         /* here after the feedback was successfuly submitted,
                                          I used to clear the text fields in all input fields. */
                this.email = '';
                this.feed_text = '';
            }
        }
    }
})