<template>
<div id="cam">
    <v-container fill-height fluid>
    <v-row
        align="center"
        justify="center"
    >
    <v-col></v-col>
    <v-col>
        <v-btn
            elevation="5"
            @click="toggleCamera"
        >
            <span v-if="!isCameraOpen">Открыть камеру</span>
            <span v-else>Закрыть камеру</span>
        </v-btn>
        <div v-if="isCameraOpen">
            <video ref="camera" :width="450" :height="337.5" autoplay></video>
        </div>
    </v-col>
    <v-col></v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>

export default {
    name: 'cam',
    data() {
    return {
      isCameraOpen: false,
      link: '#'
    }},
    methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
					alert("May the browser didn't support or there is some errors.");
				});
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
			tracks.forEach(track => {
				track.stop();
			});
    },
  }
}
</script>