const team =[
    {
        name:'Akshansh Gandas',
        position:'Joint Sec(Tech dept.)',
        quote:`Khud ko superman banaya h kyunki mene site banayi h!`,
        dp:'https://imgs.search.brave.com/fBtey9CNS51vYI_298eea36a6wBj9oBbmDN9rhob-Wo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saW5j/b2xubGlvbnRhbGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wMy9TdXBl/cm1hbi53ZWJw'
    },
    {
        name:'Roshan Singh',
        position:'Joint Sec(Tech Deptt.)',
        quote:`Slightly less cooler tech guy than the other Joint sec.`,
        dp:'https://imgs.search.brave.com/ZH0_IWCUTrASt6NXu3M0hSI3BYWA8mEi0NWdzCDRUnk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA2/ODEyNjQxL3Bob3Rv/L2luZGlhLWdhdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTNaeEpnUUFjRTZV/V3E2emY5T05kZnBE/cHdDeU45aUo1dkRM/RVFOYVZGUm89'
    },
    {
        name:'Rahul Verma',
        position:'Organizing Sec.',
        quote:"I put the ‘pro’ in procrastinate.",
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNMbIfUJMmAPLQokw-_cT0xINMboGSdXcqiKY3o22Ir2UF6ZFA3eghMHMpjLkrQ0V0p0&usqp=CAU'
    },
    {
        name:'Yash Goyal',
        position:'Treasurer',
        quote:"Even Indian gov passes funds faster than me!",
        dp:'https://imgs.search.brave.com/yk02KplS3yRMvNoiSA8sAvBv6Oyve6c990rENtsjQ6g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/YW5tZW1ldGVtcGxh/dGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvbXVrZXNoLWFt/YmFuaS1zdGFuZGlu/Zy1iZWhpbmQtbml0/YS1hbWJhbmkuanBn'
    },
    {
        name:'Robin Singh',
        position:'Joint Organizing sec.',
        quote:`Still trying to figure out my job.`,
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDD-RIN_xDkeRFKExRSmM3xrrMOzdzjVrZg&s'
    },
    {
        name:'Divesh',
        position:'Joint Organizing sec.',
        quote:`Jo har kisi ka hota h wo kisi ka nahi hota!`,
        dp:'https://imgs.search.brave.com/tsXL253vrUQ8hbvUWjYj1Q-yVhn93OdivMopwmAqwPo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ob3JzZV8xNjE3/NjctMTc3MS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw'
    },
    {
        name:'Aastha Pehel',
        position:'Joint Organizing sec.',
        quote:`Too busy to send any quote! or perhaps too lazy!`,
        dp:'https://imgs.search.brave.com/cVASiO9SynDb46m1-hPjhvmOAAO2H6G_YXwiLgGcpn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzU1LzA5Lzk4/LzM2MF9GXzg1NTA5/OTg1MV9raXdYQ2li/SUM1VW9VeFRJRktY/TGt5NzE1TzA0OXBj/RS5qcGc'
    },
    {
        name:'Himanshu digwal',
        position:'Joint Sec.(Workshops)',
        quote:`Itni to workshops nahi ho rahi jitne Joint Secs h!`,
        dp:'https://imgs.search.brave.com/0oZn5-_nEptLKYnUe5IdWvIDQTBK3aHRevoqWoeBe_I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvb2dn/eS1hbmQtdGhlLWNv/Y2tyb2FjaGVzLW1v/dG9yYmlrZS1rbXJn/Ym5md3VidjB4YWR5/LmpwZw'
    },
    {
        name:'MD.Taha Siddiqui',
        position:'Joint Sec.(Workshops)',
        quote:`Expert at giving orders and even better expert at not following any orders.`,
        dp:'https://imgs.search.brave.com/1gCSGDw2T27URZ32cjpRkbvjczcbL75XL8N8JfOTKb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA0L1Nha3Vy/YS5qcGc'
    },
    {
        name:'Tanisha',
        position:'Joint Sec.(Workshops)',
        quote:`24x7 Available for bitching!`,
        dp:'https://imgs.search.brave.com/Lt5L1ydO39460Fbo9kfHR5RKjWZf7409CHN-0m9pv8M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8xMC81/LTY1M2I1N2VjMDcy/YWRfXzcwMC5qcGc'
    },
    {
        name:'Rajat Ranga',
        position:'Joint Sec.(PR)',
        quote:`Khud ke relations ke toh lage pade h , public k sath kya he relations banunga`,
        dp:'https://imgs.search.brave.com/3tiqQRDde04zqMuSIQISD6Oxl1Q0D5y1KjjxlmvGpaI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTEvdHlyaW9uLWxh/bm5pc3Rlci1wZXRl/ci1kaW5rbGFnZS1p/bi1nYW1lLW9mLXRo/cm9uZXMtc2Vhc29u/LTEuanBn'
    },
    {
        name:'Ritu',
        position:'Joint Sec.(PR)',
        quote:"Smartness is essential, but oversmartness is entertaining.And I'm entertaining AF...",
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEDOt6p8Y_X3mBapdK_4ptAMNNt2jGt--rQ&s'
    },
    {
        name:'Priyanka',
        position:'Joint Sec.(PR)',
        quote:"Productivity hack: Just pretend you're busy",
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSJqsmZOCKMmFWh-wu91d4N22dtcwYLbRAw&s'
    },
    {
        name:'Akshat Goyal',
        position:'Joint Sec(Registerations)',
        quote:`Paise Khane ki ninja technique,NING! NING! NING! NING!`,
        dp:'https://imgs.search.brave.com/VGE8zsGi1-tF0HjntpnTrKMFEFaYUwNiNEv3ZZYvYkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1USXhOekUw/T1RZM05sNUJNbDVC/YW5CblhrRnRaVFl3/TmpVMU1EZzMuX1Yx/Xy5qcGc'
    },
    {
        name:'Ishu',
        position:'Joint Sec.(Registerations)',
        quote:'Money should go in good hands and I think it’s mine..',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrKNswaLO_0jEJFZS80Plg378shdPunmuvA&s'
    },
    {
        name:'Hardik Ponta',
        position:'Joint Sec(Food & Refreshments)',
        quote:'The only good thing about me is my car',
        dp:'https://imgs.search.brave.com/fmVCHCkZgYrRO3xHbwJxkLgBefttIRznafiFqFNVitA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuOTF3aGVlbHMu/Y29tL3VzZWRfdmVo/aWNsZS82NjZkNzdi/NGYxZjgzZDQzOTky/MmQ5ZGQvMTAwMDE0/Mzk3MTYtMzhhMDk1/NDhhZDc2NDQ3ZDhj/M2JkZDlmMTBmNGQy/YTEtRXh0ZXJpb3It/Ni5qcGc_dz0yNjgm/cT02MD93PTc1MCZx/PTY1'
    },
    {
        name:'Mayank Mittal',
        position:'Joint Sec.(Food & Refreshments)',
        quote:'Refreshment ke name pr sirf ek samosa deta hun bs!',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGKOCYTejqdw124r-Ak-0p4E9DqJcqkxgyQ&s'
    },
    {
        name:'Aayush Verma',
        position:'Joint Sec(Events)',
        quote:'My entire personality revolves around my bike',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhC3TDRJ_yRDN3hUNdwx-YfkJ6gaAGmYCfQ&s'
    },
    {
        name:'Bharti Bhalla',
        position:'Joint Sec.(events)',
        quote:'Warning:contains boldness, humor n occasional eye-rolling!',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbg7IpeqdENAZaITrhfGJj5gXrFRn1wbQwQ&s',
    },
    {
        name:'Rohit Sheoran',
        position:'Joint Sec.(Security)',
        quote:"Mere team wale bhul gaye h ki m bhi exist karta hun!",
        dp:'https://imgs.search.brave.com/UCCaeRkPnKt2LKLJ2IURIEQVq_bfvRdt-A_dpG5q-2k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hob3RhYmhlZW0u/Y29tL2JhbGkvbW9i/aWxlL2ltYWdlcy9r/YWxpYV9pbm5lci5w/bmc'
    },
    {
        name:'Rahul Yaduv',
        position:'Joint Sec.(Security)',
        quote:'If you have any security issues, contact the other Joint Sec—not me!',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sg895aIyF1eon6TfyHrDQvsWv7sR40JvdQ&s'
    },
    {
        name:'Aryan',
        position:'Joint Sec.(Art & Decor)',
        quote:"If you can't blow them with your brilliance then baffle them with your bullsh*t!",
        dp:'https://im.idiva.com/content/2022/Jun/Chatur-from-3-idiots_amp_62b02e71f0139.jpg'
    },
    {
        name:'Divya saini',
        position:'Joint Sec.(Art & Decor)',
        quote:'Event toh bahana h,Free m holiday chahiye the',
        dp:'https://imgs.search.brave.com/8e9eqcNoW6OYgm7kdZIAgaHqZcIeyIw0WFANapF8gZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzU3LzM4Lzgx/LzM2MF9GXzU3Mzg4/MTgxXzFKMFcwaWpI/M2ZwdDJoTmhhNTla/bXl3ZDFndXdIVUQ5/LmpwZw'
    },
    
    {
        name:'Shagun',
        position:'Joint Sec.(Art & Decor)',
        quote:'Hardwork is the key to success,but who needs a key when the door is already open',
        dp:'https://images.ottplay.com/images/dhamaal-jaaved-jaaferi-7.jpg'
    },
    {   name:'Adrika Pal',
        position:'Joint Sec.(Culturals)',
        quote:'The world can be a depressing place, and I feel I contribute to it.',
        dp:'https://imgs.search.brave.com/CBMJF0Hw2kp0b99DoCLhKhE8UjFljjd-VWPC2iEd4fM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1vdmlld2Vi/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDMv/dW1icmlkZ2UuanBn'
    },
    {
        name:'Khushi Malik',
        position:'Joint Sec.(Culturals)',
        quote:"Roses are red, Violets are blue,My jokes are lame,Let's bore each other, too!",
        dp:'https://imgs.search.brave.com/qXywW0MNuQDSNrbBfGzrgHyxD9E9klWGIg_i08IaGl4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Fa/RzhIM3RQZXhUSk5W/RWRMVmQ4MlUuanBn'
    },
    {
        name:'Diya',
        position:'Joint Sec.(Hospitality)',
        quote:"If being talented is a crime, then I'm pretty innocent.",
        dp:'https://im.indiatimes.in/content/2020/May/raj_5eccdb1346c25.jpg?w=640&h=427&cc=1&webp=1&q=75'
    },
    {
        name:'Bharti Surya',
        position:'Joint Sec.(Hospitality)',
        quote:'People say being kind is free, as if being evil requires a paid subscription.',
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYblC5kIlJlj3526rdiNFQFCOaIHbP5jb4Nw&s'
    },
   
]
export default team;