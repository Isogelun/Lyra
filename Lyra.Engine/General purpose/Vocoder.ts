import { initializeDirectories, initializeCongfigs } from '../../Lyra.Core/units/Startup/initialization.ts';
import path from 'path';

class Engine {
    private static rootdir = process.cwd();
    private static vocoderdir = path.join(this.rootdir, 'vocoders');
    
    static initialize() {
        // ������Ҫ���ļ���·��
        const requiredDirectories = [
            this.vocoderdir,
        ];
        
        // ���� units ��ĳ�ʼ������
        initializeDirectories(requiredDirectories);

        const configs = initializeCongfigs([this.vocoderdir], 'vocoder.yaml');

        return configs;
    }
};