import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PlanCard from "../components/Cards/PlanCard";

function Step1() {
  const plans = [
    {
      id: 1,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      id: 2,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content."
    },
    {
      id: 3,
      title: "28506 - Plan Conect Star EMP 35GB FIN",
      description:
        "It is a long established fact that a reader will be distracted by the readable content."
    }
  ];

  return (
    <WizardLayout sidebar={<StepSidebar />}>
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          title={plan.title}
          description={plan.description}
        />
      ))}

      <button>
        Siguiente
      </button>
    </WizardLayout>
  );
}

export default Step1;