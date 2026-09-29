const assert = require('node:assert/strict');
const fs = require('node:fs'); const os = require('node:os'); const path = require('node:path'); const cp = require('node:child_process');
const root = process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');
const dir = fs.mkdtempSync(path.join(process.cwd(),'.stackline-grunt-cli-'));
try {
 fs.writeFileSync(path.join(dir,'Gruntfile.js'), "module.exports=function(grunt){grunt.registerTask('probe',function(value){grunt.log.writeln('STACKLINE:'+value+':'+grunt.option('answer'));});};\n");
 const result = cp.spawnSync(process.execPath,[path.join(root,'bin/grunt'),'--base',process.cwd(),'--gruntfile',path.join(dir,'Gruntfile.js'),'probe:ok','--answer=42','--no-color'],{encoding:'utf8'});
 assert.equal(result.status,0,result.stderr+result.stdout); assert.match(result.stdout,/STACKLINE:ok:42/);
 const version=cp.execFileSync(process.execPath,[path.join(root,'bin/grunt'),'--version'],{encoding:'utf8'});assert.match(version,/grunt-cli v1\.0\.0/);
 for(const f of ['bin/grunt','lib/completion.js','lib/info.js'])cp.execFileSync(process.execPath,['--check',path.join(root,f)]);
 console.log('Packed grunt CLI dispatch, arguments, options and version passed');
} finally {fs.rmSync(dir,{recursive:true,force:true});}
