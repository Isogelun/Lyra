import { initializeCongfigs } from '../../Lyra.Core/units/Startup/initialization.ts';
import path from 'path';

class Engine {
    private static rootdir = process.cwd();
    // �������������������ļ�·��
    private static singersdir = path.join(this.rootdir, 'singers');
    static initialize() {
    const configs = initializeCongfigs([this.singersdir], 'singers.yaml');
        
     return configs;
    }
}