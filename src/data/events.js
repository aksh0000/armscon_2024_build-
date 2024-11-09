const events_data = [
    {
        name: `DIAGNOSTIC
    DOSSIER`,
        date: `Day 2`,
        venue: `Lecture Theatre`,
        image: `https://img.freepik.com/premium-photo/men-women-taking-part-business-meeting-negotiation-brainstorming-discussing-ideas-startup-generative-ai_1423-8934.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://forms.gle/SyJSEoPgXV4Wd93y5`,
        subheading: 'Case Presentation',
        about: `where symptoms speak and diagnosis decodes 🔎.
        Join us in piecing together the Puzzle 🧩 of Patient Care, transforming clues into clarity on our journey through diagnosis! 🥼`
    },
    {
        name: `INTELLECTUAL
    TEMPEST`,
        date: `Day 2`,
        venue: `Lecture Theatre`,
        image: `https://img.freepik.com/premium-photo/3d-male-cartoon-character-medical-report-concept-illustration_1029473-774246.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `Each research paper 📃presented is like a wave in the tempest revealing deeper truths of medicine 🩺to create lasting impact.`,
        subheading: 'Oral Paper Presentation',
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://forms.gle/SyJSEoPgXV4Wd93y5`
    },

    {
        name: `MEDSCAPES`,
        date: `Day 2`,
        venue: `Lecture Theatre`,
        image: `https://img.freepik.com/premium-photo/cartoon-doctor-with-face-mask-presenting-health-care-information_1029473-761791.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        subheading: 'Poster Presentation',
        about: `MedScapes is an exciting platform✨️ for expressing complex medical concepts through artistic poster designs. Participants translate scientific ideas🥼 into visually engaging displays📃🖼, combining creativity  with knowledge  to make a lasting impact  on viewers.🌟`,
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://forms.gle/SyJSEoPgXV4Wd93y5`
    },//AAYOUSH VERMA WORKS!
    {
        name: `ARTBEAT`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/free-photo/anime-style-boy-girl-couple_23-2151451493.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        subheading: `Faculty Painting Event`,
        about: `Where Every Stroke Tells a Healing Story 🎨
        Uniting faculties to craft expressions infused with passion! \n Storytelling Through Paint
        Professors depict memorable moments from their medical journeys—whether inspiring, challenging, or humorous!`,
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://forms.gle/9FpYZJx8kMG27iY26`
    },
    {
        name: `SPELLS &
SUPERPOWERS`,
        date: `Day 3`,
        subheading: `Spells and superpowers: A Magical Marvel Quiz`,
        venue: `Auditorium main hall`,
        image: `https://img.freepik.com/free-photo/anime-style-students-attending-school_23-2151066446.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `The quiz which gives you opportunity to show case your knowledge in the world of magic and superpowers. Get to know are you a gryffindor, Slytherin , Hufflepuff or ravenclaw ? Test your knowledge of Hogwarts world.`,
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://forms.gle/b2xgorcfi1wzJF2Z7`
    },

    {
        name: `MEDPLAY CHARADES`,
        date: `Day 0`,
        subheading: 'Medical Dumbcharades',
        venue: `Auditorium main hall`,
        image: `https://img.freepik.com/free-photo/anime-style-students-attending-school_23-2151066428.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `Speak with your eyes & let your body act medicine out ….

        A fusion of your favourite childhood game & medicine to create an
        artistic explosion …………
        Here comes the opportunity to display
        your acting prowess …!`,
        hc: `Bharti Bhalla`,
        email_of_hc: `sbhalla598@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLSfst0W8_foboDiT38mZcY2cODNxrU1lX7-Ra6GZjLPXRD0p3Q/viewform?vc=0&c=0&w=1&flr=0`
    },
    {
        name: `RANGOLI
RADIANCE`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/premium-photo/artistic-rangoli-with-abstract-designs-warmcool-color-combos_1264082-158013.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        subheading: 'Rangoli competition',
        about: `Whorling lines evoking
    celestial movements`,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScEjG364SxgNYBhIY1aWB4F2fWt5OARkRqYr1r_7EEQeEW2vg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`
    },
    {
        name: `INK FLOWS,
PENS DANCE`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/premium-photo/hd-8k-wallpaper-stock-photographic-image-generative-ai_882954-106697.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        subheading: 'Calligraphy competition',
        about: `From classic scripts to
    modern design`,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScEjG364SxgNYBhIY1aWB4F2fWt5OARkRqYr1r_7EEQeEW2vg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`
    },

    {
        name: `PALETTE
PARADISO`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/premium-photo/samurai-logo-art-illustration-japanese-style-design_874046-1272.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        subheading: 'Art/Drawing competition',
        about: `A paradise of colours &
    artistic inspiration
    `,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScEjG364SxgNYBhIY1aWB4F2fWt5OARkRqYr1r_7EEQeEW2vg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`
    },
    {
        name: `ARTWAVE
EXTRAVAGANZA`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/premium-photo/digital-art-selected_447899-7231.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `T-shirt painting calming zig zag
    patterns`,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScEjG364SxgNYBhIY1aWB4F2fWt5OARkRqYr1r_7EEQeEW2vg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`,
        subheading: 'T-Shirt painting competition'
    },
    {
        name: `HEENA
HIGHNESS`,
        date: `Day 2`,
        venue: `Auditorium parking`,
        image: `https://img.freepik.com/free-photo/cartoon-skateboarding-design_1409-6158.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `The beauty of tradition
    meets the art of precision`,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScEjG364SxgNYBhIY1aWB4F2fWt5OARkRqYr1r_7EEQeEW2vg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`,
        subheading: 'Mehandi competition'
    },
    {
        name: `STROKE OF BRILLIANCE`,
        date: `Day 3`,
        venue: `Auditorium`,
        image: `https://img.freepik.com/premium-photo/human-anatomy-model-illustration-anatomy-visualization_630789-10197.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        about: `Unleash your inner artist and reveal the beauty of the human body`,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLSf1MzaSPCAY9A3FYScK-Gr0mhiL13qPO3bbLTEZ7ExZyL2KJA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link`,
        subheading: 'Paint your anatomy'
    },
    {
        name: `DEAD
        MAN'S CHEST`,
        date: `Day 3`,
        venue: `Auditorium reception`,
        image: `https://img.freepik.com/free-photo/anime-style-earth_23-2151076405.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid`,
        
        about: `"Not all treasure's silver and gold , mate🏴‍☠️"

        ❌️marks the spot , where the pirate's body lies ☠️, guarded by the spirit of the seven seas ⛵️ and the curse of the black swan. Dig it deep if you can but beware him mate🪝🗝
        `,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLSdBsHd9lfvd1sKmzYEraojB13FmG8PJeGPWkRWyf9PV8DyJTg/viewform?usp=sf_link`,
        subheading: 'Treasure hunt',
    }, {
        name: `LA CASA DE
        RECURSOS`,
        subheading: 'Back Borrow & Steel',
        date: `Day 3`,
        venue: `Auditorium reception`,
        image: `https://img.freepik.com/premium-photo/close-up-white-box-with-candle-plant-generative-ai_958192-73190.jpg?ga=GA1.1.819546821.1730638034&semt=ais_siglip`,
        about: `“United we Heist, Divided we Beg”

        Get ready to unleash your creativity and charm as you race against the clock to gather quirky items based on fun prompts 🏴‍☠️
        
        `,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://forms.gle/TqLPgigedQnuipyS6`,
        
    }
    , {
        name: `MR. & MS.
        ARMSCON`,
        date: `Day 0,1,2`,
        venue: `Auditorium main hall`,
        image: `https://img.freepik.com/free-photo/beautiful-anime-couple-new-year-s-eve_23-2151038013.jpg?ga=GA1.1.819546821.1730638034&semt=ais_siglip`,
        about: `“Elegance on Deck, Intelligence at the Helm”\n
        Round 1- Intro\n
        Round 2- Talent\n
        Round 3- Questionnaire
        `,
        hc: `Aayush verma`,
        email_of_hc: `aayushverma1709@gmail.com`,
        register_form: `https://docs.google.com/forms/d/e/1FAIpQLScbzNWR5fmuiR03FYvOaYEMAn4C2_XKRu3I-1xvV7cpJPLdgg/viewform?vc=0&c=0&w=1&flr=0&pli=1`,
        subheading: 'Beauty pageant',
    }

]


export default events_data;