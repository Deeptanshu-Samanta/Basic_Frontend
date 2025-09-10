function setBackground() {
      let hour = new Date().getHours();
      console.log(hour);
      let msg = document.getElementById("msg");

      
      if(hour>=3 && hour<6){
        // Early Morning
        document.body.style.background = "url('https://tse4.mm.bing.net/th/id/OIP.6bxC5h96PRclaLua-76sbwAAAA?cb=thfc1&pid=ImgDet&w=184&h=324&c=7&dpr=1.3&o=7&rm=3') no-repeat center/cover";
        document.body.style.backgroundSize = "cover";
        msg.textContent= "Good Morning!";
      }else if (hour >= 6 && hour < 12) {
        // Morning
        document.body.style.background = "url('https://thumbs.dreamstime.com/b/golden-hour-panorama-vast-potato-farm-rolling-hills-lush-fields-agricultural-beauty-witness-breathtaking-sprawling-356056506.jpg') no-repeat center/cover";
        document.body.style.backgroundSize = "cover";
        msg.textContent = "🌅 Good Morning!";
      } else if (hour >= 12 && hour < 15) {
        // Afternoon
        document.body.style.background = "url('https://cdn.pixabay.com/photo/2019/10/06/13/31/potato-harvest-4530241_1280.jpg') no-repeat center/cover";
        document.body.style.backgroundSize = "cover";
        msg.textContent = "☀️ Good Afternoon!";
      } else if(hour>=15 && hour<19){
        // Evening
        document.body.style.background = "url('https://cdn.pixabay.com/photo/2018/09/20/11/39/potatoes-3690562_1280.jpg') no-repeat center/cover";
        document.body.style.backgroundSize = "cover";
        msg.textContent = "🌙 Good Evening!";
      }else{
        // Night
        document.body.style.background = "url('https://i.pinimg.com/originals/3c/1f/c1/3c1fc1c12e6fae5a711c91df6e7ae420.jpg') no-repeat center/cover";
        //document.body.style.backgroundSize = "cover";
        msg.textContent = "🌌 Good Night!";
      }
    }

function showUploadSection() {
    const fieldset = document.getElementById('locationFieldset');
    const uploadSection = document.getElementById('uploadSection');
    if (!fieldset || !uploadSection) return; // Prevent error if elements not found
    fieldset.classList.remove('slide-in');
    fieldset.classList.add('slide-out');
    setTimeout(() => {
        fieldset.style.display = 'none';
        uploadSection.style.display = 'block';
        uploadSection.classList.remove('slide-out');
        uploadSection.classList.add('slide-in');
      }, 500);
}
setBackground();

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  menuBtn.classList.toggle('active'); // 🔥 add this
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  menuBtn.classList.remove('active'); // 🔥 reset button
});
