//
// export type SoundChannel = {
//     name: string;
//     gain: GainNode;
//     playingSamples: PlayingSample[];
//     isMonophonic?: boolean;
//     initialVolume: number;
//     monophonicFadeOutTime: number; // in seconds
// }
//
// export type PlayingSample = {
//     context: AudioContext;
//     sample: ISample;
//     bufferSource: AudioBufferSourceNode;
//     gain: GainNode;
//     channel?: SoundChannel;
//     panner?: PannerNode;
// }