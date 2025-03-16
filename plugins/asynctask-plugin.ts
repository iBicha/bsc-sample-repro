import {
    CompilerPlugin,
    Program,
} from 'brighterscript';

export class AsyncTaskPlugin implements CompilerPlugin {
    public name = 'AsyncTaskPlugin';

    beforeProgramValidate(program: Program) {
        const fileContent = `enum Tasks
    MyTask = "_AsyncTask"
end enum
`
        program.setFile('source/AsyncTask/Tasks.bs', fileContent);
    }
}

export default () => {
    return new AsyncTaskPlugin();
};
