import type {
    VideoHTMLAttributes,
    HTMLAttributes,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';

export type Response = {
    msg: string;
    code: number;
    success: boolean;
    data: unknown;
    list: unknown;
}

export type noArgVoid = () => void;

export type isArgVoid<T> = (arg: T) => void;

/**
 * @description: 视频类型
 * live: 实时视频
 * record: 录像
 * stream-record: 流录像
 */
export type VideoType = 'live' | 'record' | 'stream-record';

/**
 * @description 设备信息选项，可通过设备id获取视频流url，优先级：deviceOpts < url
 * @param {string} deviceId - 设备id 必填
 * @param {string} urlPrefix - 视频流url前缀，开发环境测试用，生产环境下无效 eg: 'ws://192.168.9.148' or 'wss://lzz.enbo12119.com'
 * @param {string} streamType - 视频流类型, 1:主码流, 2:辅码流 default: 1
 * @param {string} channelType - 视频通道类型, 1:可见光, 2:热红外 default: 1
 */
export type DeviceOpts = {
    deviceId: string;
    urlPrefix?: string;
    streamType?: '1' | '2';
    channelType?: '1' | '2';
}

/**
 * @description: player控制栏选项
 * @param {boolean} fullscreen 是否有全屏功能 default: true
 * @param {boolean} recording 是否有录制功能 default: false
 * @param {boolean} screenshot 是否有截图功能 default: true
 */
export type ControlsOpts = {
    fullscreen?: boolean;
    recording?: boolean;
    screenshot?: boolean;
}

/**
 * @description video元素属性
 * @interface VideoEleAttributes
 * @param {boolean} playing 是否播放
 * @param {boolean} buffering 是否缓冲
 * @param {number} currentTime 当前时刻
 * @param {number} totalTime 总时长
 * @param {number} bufferedTime 缓存时长
 * @param {boolean} ended 是否结束
 * @param {number} videoWidth 视频宽度
 * @param {number} videoHeight 视频高度
 * @param {number} networkState 网络状态
 * @param {number} readyState 就绪状态
 */
export type VideoEleAttributes = {
    playing: boolean;
    buffering: boolean;
    canplay: boolean;
    ended: boolean;
    resizing: boolean;
    error: number;
    currentTime: number;
    totalTime: number;
    bufferedTime: number;
    videoWidth: number;
    videoHeight: number;
    networkState: number;
    readyState: number;
}

/**
 * @description Player组件方法
 * @param play 播放
 * @param pause 暂停
 * @param reload 重新加载
 * @param setPlayProgress 设置播放进度
 * @param setVideoSrc 设置视频源
 */
export type PlayerMethods<T = noArgVoid, U = isArgVoid> = {
    play: T;
    pause: T;
    reload: T;
    setPlayProgress: U<number>;
    setVideoSrc: (src: string, type?: VideoType) => void;
}

/**
 * @description Player组件回调
 * @param onPlay 播放回调
 * @param onPause 暂停回调
 * @param onTimeUpdate 时间更新回调
 * @param onEnded 结束回调
 * @param onProgressMouseDown 鼠标按下进度条时回调
 * @param onProgressMouseUp 鼠标抬起进度条时回调
 * @param onVideoStateChange 视频状态改变回调
 * @param onVideoLoadError 视频加载错误回调
 * @param onVideoLoadFailed 视频加载失败回调
 *
 * 更多video元素原生事件回调可通过videoEleOpts属性绑定，或者通过ref获取video元素绑定
 * eg：videoEleOpts={{
 *      onCanPlayThrough: () => console.log('onCanPlayThrough')
 *      onDurationChange: () => console.log('onDurationChange')
 *      ...
 *    }}
 */
export type VideoCallback<T = noArgVoid, U = isArgVoid, K = VideoElementAttributes> = {
    onPlay: U<K>;
    onPause: U<K>;
    onTimeUpdate: U<K>;
    onEnded: U<K>;
    onCanplay: U<K>;
    onProgressMouseDown: U<K>;
    onProgressMouseUp: U<K>;
    onVideoStateChange: U<K>;
    onVideoLoadError: U<K>;
    onVideoLoadFailed: U<K>;
}

/**
 * @description PlayerRef
 * @param VideoElementAttributes video元素属性
 * @param PlayerMethods player组件方法
 * @param video video元素
 */
// export type PlayerRef = PlayerMethods
//     & { attributes: VideoElementAttributes }
//     & { video: HTMLVideoElement | null };

export type PlayerRef = { video: HTMLVideoElement | null };

/**
 * @description Player组件属性
 * @param {ControlsOpts | false} controlsOpts player控制栏选项 default: { fullscreen: true, recording: false, screenshot: true }, false: 不显示控制栏
 * @param {DeviceOpts} deviceOpts 设备信息选项，可通过设备id获取视频流url，优先级：deviceOpts < url
 * @param {string} url 视频源
 * @param {HTMLAttributes<HTMLDivElement>} videoContainerEleOpts video容器元素(div)属性选项
 * @param {VideoHTMLAttributes<HTMLVideoElement>} videoEleOpts video元素属性选项
 * @param {VideoType} videoType 视频类型 default: 'live'
 */
export interface PlayerProps<T = HTMLAttributes<HTMLDivElement>, U = VideoHTMLAttributes<HTMLVideoElement>> extends Partial<VideoCallback> {
    controlsOpts?: ControlsOpts | false;
    deviceOpts?: DeviceOpts;
    url?: string;
    videoContainerEleOpts?: T;
    videoEleOpts?: U;
    videoType?: VideoType;
}

declare const Player: ForwardRefExoticComponent<PlayerProps & RefAttributes<PlayerRef>>;
export default Player;
export { Player };
