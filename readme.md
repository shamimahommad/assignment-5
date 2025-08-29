১. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
উত্তরঃ getElementById ডকুমেন্ট থেকে একটি নির্দিষ্ট id এর এলিমেন্ট খুঁজে বের করে। এটি শুধুমাত্র একটি 
    এলিমেন্ট রিটার্ন করে, কারণ id ইউনিক হয়।

    getElementsByClassName হলো কোন ডকুমেন্ট মাঝে একটি নির্দিষ্ট class নামের সব এলিমেন্ট খুঁজে বের করে।

    querySelector হলো কোন ডকুমেন্ট এর মাঝে একাধিক ক্লাস থাক্লেও শুধুমাত্র প্রথম ক্লাস এর মান নিয়ে কাজ করে। 

    querySelectorAll হলো কোন ডকুমেন্ট এর মাঝে এই নামে যত গুলো ক্লাস ব্যবহার করা হয়েছে সব গুলো ক্লাস এর মান নিয়ে কাজ করতে পারে। 

২. How do you create and insert a new element into the DOM?
উত্তরঃ DOM-এ নতুন এলিমেন্ট তৈরি ও ঢোকানোর জন্য document.createElement দিয়ে নতুন HTML এলিমেন্ট তৈরি করে
    নিতে হবে। DOM এ ঢোকানোর জন্য append করতে হবে। যেমনঃ 
    const div = document.createElement("div");
        div.innerHTML = `
                    <div class="inter-regular mt-4 flex justify-between items-center bg-gray-100 rounded-xl p-2 text-sm">
                        <div>
                            <h1 class="font-bold">Shamim Ahommad</h1>
                            <p>01774581701</p>
                        </div>
                        <p class="hind-madurai-regular">${data.time}</p>
                    </div>
            `;
        transactionContainer.appendChild(div);

৩. What is Event Bubbling and how does it work?
উত্তরঃ Event Bubbling হলো DOM ইভেন্ট হ্যান্ডলিংয়ের একটা প্রক্রিয়া।child এলিমেন্ট থেকে শুরু করে parent 
    এলিমেন্টের দিকে ধাপে ধাপে চলে যায়।  
    যখন কোনো বাটনে ক্লিক করা হয় তখন সেই বাটনে ইভেন্ট চালু হয় এবং ধীরে ধীরে তার প্যারেন্ট , প্যারেন্ট থেকে প্যারেন্ট এর প্যারেন্ট এভাবে রুট পর্যন্ত চলে যায় এভাবে কাজ করে। 

৪. What is Event Delegation in JavaScript? Why is it useful?
উত্তরঃ Event Delegation হলো ছোট ছোট এলিমেন্টের পরিবর্তে তাদের প্যারেন্ট বা বড় কোনো এলিমেন্টে একবারে 
    ইভেন্ট লিসেনার এড করা। 
    Event Delegation দিয়ে শুধু প্যারেন্ট এলিমেন্টে একবার লিসেনার বসিয়ে সব চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডল করা যায়, এজন্য Event Delegation ব্যবহার করা হয়। 

৫. What is the difference between preventDefault() and stopPropagation() methods?
উত্তরঃ preventDefault হলো একটা মেথড। এটা ব্রাউজার যখন কোনো ইভেন্টে এর কাজ কে আটকে দেয়। ব্রাউজারের  
     স্বাভাবিক কাজকে মানে রিলোড বন্ধ করো। 

    stopPropagation হলো একটা মেথড । যখন কোনো এলিমেন্ট এ তখন সেটা তার প্যারেন্ট এলিমেন্ট এও চলে যায়। সেটা থামানর জন্য stopPropagation ব্যবহার করা হয়, যাতে প্যারেন্ট এলিমেন্ট এ না যায়।