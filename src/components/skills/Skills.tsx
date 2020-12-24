import { SkillsObject, SkillsObj } from '../../infoObjects/SkillsObj'

function Skills() {

    const skills: SkillsObj = SkillsObject(100)

    return (
        <div>
            <div className='icon-hover'>
                {skills.docker}
            </div>
            <div className='icon-hover'>
                {skills.spring}
            </div>
            <div className='icon-hover'>
                {skills.react}
            </div>
            <div className='icon-hover'>
                {skills.jira}
            </div>
            <div className='icon-hover'>
                {skills.sonarqube}
            </div>
            <div className='icon-hover'>
                {skills.mysql}
            </div>
        </div>
    );
}

export default Skills;
