<template>
  <router-view/>
</template>

<script>
import {messaging} from './firebaseConfig'
import {admin} from './adminFirebaseConfig'
export default {
  created(){ 
    messaging
  },
  data(){
    return{}
  },
  methods:{
    sendNotifikasi(){
      const message = {
        token: 'evfkXyhyRSVXahrN1afW5G:APA91bEQqKBVbc12SdvujhqzbmMKGjANKBIQTt6-taGUtSlNzh5HT-BIq3je-d5D_17U7sXAvsC1KXbMOeWGh9gKF_2KXIzJX_8sxAa0fM5b85_F-UH7yeIYL1bEZIe2YLkZQ3xUtrTi',
        notification: {
          title: 'Judul Notifikasi',
          body: 'Isi pesan notifikasi',
        },
      };

      admin.messaging().send(message)
        .then((response) => {
          console.log('Notifikasi berhasil dikirim:', response);
        })
        .catch((error) => {
          console.error('Terjadi kesalahan saat mengirim notifikasi:', error);
        });
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
