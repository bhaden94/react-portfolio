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
        </div>
    );
}

export default Skills;
